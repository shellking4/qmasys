import { BaseEntity } from "typeorm";
export declare abstract class Audit extends BaseEntity {
    creator_id?: number;
    editor_id?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
