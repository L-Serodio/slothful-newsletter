import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from './User';
import { Pokemon } from './Pokemon';

@Entity('pokemons_users')
class PokemonUser {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    pokemon_id: number;

    @ManyToOne(() => Pokemon)
    @JoinColumn({ name: "survey_id" })
    pokemon: Pokemon;

    @CreateDateColumn()
    created_at: Date;
}

export { PokemonUser };