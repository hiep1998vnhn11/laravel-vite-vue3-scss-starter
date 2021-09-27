import { ErrorTypeEnum } from '/@/enums/exceptionEnum'
import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum'
import { RoleEnum } from '/@/enums/roleEnum'
export interface LockInfo {
    pwd?: string | undefined
    isLock?: boolean
}

// Error-log information
export interface ErrorLogInfo {
    type: ErrorTypeEnum
    file: string
    name?: string
    message: string
    stack?: string
    detail: string
    url: string
    time?: string
}

export interface UserInfo {
    username: string
    school_id: string
    school_year: string
    year_level: string
    ip_id: string
    ip_school: string
    ip_home: string
    dynamic_ip: string
    cognito_login_id: string
    avatar?: string
    roles: string[]
}

export interface BeforeMiniState {
    menuCollapsed?: boolean
    menuSplit?: boolean
    menuMode?: MenuModeEnum
    menuType?: MenuTypeEnum
}
