import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";

@Entity('pokemons')
class Pokemon {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    type: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}

export { Pokemon };