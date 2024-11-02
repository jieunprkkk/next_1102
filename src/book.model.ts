export interface PostDto {
    id: string;
    title: string;
    writer: string;
    createdDt?: Date;
    updatedDt?: Date;
    isAvailable?: boolean;
}