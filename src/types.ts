export interface mainMenuItem {
    id: number,
    element: HTMLElement,
    characters: HTMLElement[],
    fontArr: number[],
    slug?: string,
    fontInterval?: ReturnType<typeof setInterval>,
    timeoutVisible?: ReturnType<typeof setInterval>,
    timeoutEnter?: ReturnType<typeof setTimeout>[],
    timeoutLeave?: ReturnType<typeof setTimeout>[],
    iframe?: HTMLElement,
}