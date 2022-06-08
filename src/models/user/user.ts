import { UserDetail } from "./userDetail";

export type User = {
    id?: string;
    avatar?: string;
    name?: string;
    username?: string;
    contact?: string;
    location?: string;
    description?: string;
    isFollow?: Boolean;
    follows?: User[];
    unFollows?: User[];
    addFollows?: User[];
}
