<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Felhasznalok>
 */
class FelhasznalokFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nev' => fake()->name(),
            'email' => fake()->email(),
            'szul_hely' => fake()->city(),
            'szul_ev' => rand(1950, 2023),
        ];
    }
}
