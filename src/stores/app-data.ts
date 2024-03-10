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
    active: false,
  }),

  actions: {
    addPuppy(puppy: PuppyData) {
      console.log('adding puppy');
      const puppies = [puppy, ...this.puppies];
      this.puppies = puppies;
    },

    updatePuppy(newPupData: PuppyData, oldPupData: PuppyData) {
      const index = this.puppies.indexOf(oldPupData);
      this.puppies[index] = newPupData;
    },

    removePuppy(puppy: PuppyData) {
      const index = this.puppies.indexOf(puppy);
      console.log(index);
      this.puppies.splice(index, 1);
    },

    validateInputs(
      name: string,
      age: string,
      imageUrl: string,
      profile: string
    ): boolean {
      let inputsValid = true;

      if (!name || !age || !imageUrl || !profile) {
        inputsValid = false;
        alert('Please fill out all fields');
        return false;
      }

      return inputsValid;
    },

    validateAge(age: string): boolean {
      if (isNaN(parseInt(age.toString()))) {
        alert('Age must be a number');
        return false;
      }
      return true;
    },

    async validateImage(imageUrl: string): Promise<boolean> {
      console.log('validating image');
      const image = new Image();
      image.src = imageUrl;
      return new Promise((resolve) => {
        image.onload = () => {
          console.log('image loaded');
          resolve(true);
        };
        image.onerror = () => {
          console.log('image error');
          resolve(false);
        };
      });
    },
  },
});

export type AppData = {
  puppies: PuppyData[];
  active: boolean;
};

export type PuppyData = {
  name: string;
  age: number;
  photoUrl: string;
  profile: string;
};
