import React, { useCallback, useEffect, useRef, useState } from "react";

interface DropzoneProps {
    onUpload: (files: File[]) => void;
    accept?: string;
    maxFiles?: number;
    maxSize?: number;
}

interface FileWithPreview extends File {
    preview: string;
}

const Dropzone: React.FC<DropzoneProps> = ({
    onUpload,
    accept = "image/*",
    maxFiles = 5,
    maxSize = 10485760, // 10MB
}) => {
    const [dragging, setDragging] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [previewFiles, setPreviewFiles] = useState<FileWithPreview[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragEnter = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(true);
    }, []);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(true);
    }, []);

    const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
    }, []);

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);

        const { files } = event.dataTransfer;
        handleFiles(Array.from(files));
    }, []);

    //   const handleInputFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { files } = event.target;
    //     handleFiles(Array.from(files));
    //   }, []);

    const handleFiles = (files: File[]) => {
        if (files.length > maxFiles) {
            setErrorMessage(`You can only upload up to ${maxFiles} files at a time`);
            return;
        }

        if (files.some((file) => file.size > maxSize)) {
            setErrorMessage(`File size should not exceed ${maxSize / 1048576}MB`);
            return;
        }

        const filesWithPreview = files.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }));
        setPreviewFiles([...previewFiles, ...filesWithPreview]);
    };

    const handleUpload = async () => {
        setPreviewFiles([]);
        setErrorMessage("");

        try {
            // upload files here
            // You can use axios, fetch, or any other HTTP client library to upload the files

            // for demonstration purposes, we will just wait for a few seconds before calling onUpload
            await new Promise((resolve) => setTimeout(resolve, 3000));

            // call onUpload with the uploaded files
            onUpload(previewFiles);

        } catch (error) {
            // handle error here
            setErrorMessage("Failed to upload files");
        }
    };

    useEffect(() => {
        return () => {
            previewFiles.forEach((file) => URL.revokeObjectURL(file.preview));
        };
    }, [previewFiles]);

    const handleRemovePreviewFile = useCallback((file: FileWithPreview) => {
        setPreviewFiles(previewFiles.filter((f) => f !== file));
    }, [previewFiles]);

    const handleCancelUpload = useCallback(() => {
        setPreviewFiles([]);
    }, []);

    return (
        <div>Drop Here</div>
    )
}

export default Dropzone;