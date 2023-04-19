
type PageTitleProps = {
    title: string
}

export function usePageTitle(title: any){
    return document.title = title
}