import { defineStore } from 'pinia';

export const useAppData = defineStore({
  id: 'app-data',
  state: (): AppData => ({
    puppies: [
      {
        name: 'Buddy',
        age: 2,
        photoUrl: 'https://cdn2.thedogapi.com/images/BJ1gnx5Vm_1280.jpg',
        profile:
          'I am afraid of cars and get stressed out at intersections when going on walks.',
      },
      {
        name: 'Charlie',
        age: 3,
        photoUrl: 'https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg',
        profile:
          'I love to go for rides in the car. I load myself into the vehicle and enjoy the scenery.',
      },
      {
        name: 'Max',
        age: 1,
        photoUrl: 'https://cdn2.thedogapi.com/images/pYkNylnuw.jpg',
        profile:
          "I'm looking for a forever home where I can be loved and cherished. I love to lean into my people and give them dog hugs.",
      },
      {
        name: 'Bella',
        age: 2,
        photoUrl: 'https://cdn2.thedogapi.com/images/ByzGsl5Nm_1280.jpg',
        profile:
          'Loves to have playdates with other pups and is happy to see them out and about in the neighborhood, but he does not want to share his home with one. His ideal home is a quiet one with no kiddos or kitties! ',
      },
      {
        name: 'Lucy',
        age: 4,
        photoUrl: 'https://cdn2.thedogapi.com/images/G1ZfvP381.jpg',
        profile: 'Lucy is a very good',
      },
    ],
  }),
});

export type AppData = {
  puppies: PuppyData[];
};

export type PuppyData = {
  name: string;
  age: number;
  photoUrl: string;
  profile: string;
};
