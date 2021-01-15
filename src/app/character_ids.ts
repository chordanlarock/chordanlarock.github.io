interface Character {
  name: string;
  poseId: number;
}

interface CharacterGroup {
  groupName: string;
  characters: Character[];
}

export const characterGroups: CharacterGroup[] = [
  {
    groupName: '---',
    characters: [
      {
        name: 'None',
        poseId: 0
      }
    ]
  },
  {
    groupName: 'Defense Attorneys',
    characters: [
      {
        name: 'Apollo Justice',
        poseId: 60,
      }, {
        name: 'Mia Fey',
        poseId: 15,
      }, {
        name: 'Phoenix Wright',
        poseId: 1,
      },
    ]
  }, {
    groupName: 'Prosecutors',
    characters: [
      {
        name: 'Miles Edgeworth',
        poseId: 5,
      }, {
        name: 'Klavier Gavin',
        poseId: 65,
      }, {
        name: 'Franziska von Karma',
        poseId: 24,
      }, {
        name: 'Godot',
        poseId: 17,
      }, {
        name: 'Manfred von Karma',
        poseId: 27,
      }, {
        name: 'Winston Payne',
        poseId: 19,
      }
    ]
  }, {
    groupName: 'Defense Counsel',
    characters: [
      {
        name: 'Maya Fey',
        poseId: 102,
      }
    ]
  }, {
    groupName: 'Judge',
    characters: [{
      name: 'Judge',
      poseId: 18,
    }]
  }, {
    groupName: 'Witnesses',
    characters: [{
      name: 'April May',
      poseId: 31,
    }, {
      name: 'Damon Gant',
      poseId: 92,
    }, {
      name: 'Dick Gumshoe',
      poseId: 13,
    }]
  },
  {
    groupName: 'Gallery',
    characters: []
  },

];
