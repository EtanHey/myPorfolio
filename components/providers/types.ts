export type ModalEntity = {
    open: boolean;
    type?:ModalType;
}

export enum ModalType {
    LOGIN = 'loginModal',
    NEW_PROJECT = 'addProjectModal'
}