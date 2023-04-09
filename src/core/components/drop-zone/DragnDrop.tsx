import React, { useRef } from "react";
import { useDrop, useDrag } from "react-dnd";

const DragDropItemTypes = {
    CARD: "card",
};

interface DragDropCardProps {
    id: string;
    title: string;
    color: string;
    onDragStart: (id: string) => void;
    onDragEnd: (id: string) => void;
}

const DragDropCard: React.FC<DragDropCardProps> = ({
    id,
    title,
    color,
    onDragStart,
    onDragEnd,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [{ isDragging }, drag] = useDrag({
        item: { id, type: DragDropItemTypes.CARD },
        begin: () => {
            onDragStart(id);
        },
        end: () => {
            onDragEnd(id);
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: DragDropItemTypes.CARD,
        drop: (item) => {
            onDragEnd(item.id);
        },
    });

    drag(drop(ref.current)); // Use ref.current to access the current value of ref

    return (
        <div
            ref={ref}
            style={{
                opacity: isDragging ? 0.5 : 1,
                backgroundColor: color,
                padding: "1rem",
                cursor: "move",
            }}
        >
            <h3>{title}</h3>
        </div>
    );
};


interface DragDropContainerProps {
    children: React.ReactNode;
}

const DragDropContainer: React.FC<DragDropContainerProps> = ({ children }) => {
    const [draggedItemId, setDraggedItemId] = React.useState<string | null>(null);

    const handleDragStart = (id: string) => {
        setDraggedItemId(id);
    };

    const handleDragEnd = () => {
        setDraggedItemId(null);
    };

    return (
        <div style={{ display: "flex", gap: "1rem" }}>
            {React.Children.map(children, (child) =>
                React.cloneElement(
                    child as React.ReactElement<DragDropCardProps>,
                    {
                        onDragStart: handleDragStart,
                        onDragEnd: handleDragEnd,
                        ...(draggedItemId ===
                            (child as React.ReactElement<DragDropCardProps>).props.id && {
                            isDragging: true,
                        }), // Use object spread to add isDragging prop conditionally
                    }
                )
            )}
        </div>
    );
};

export { DragDropCard, DragDropContainer };
