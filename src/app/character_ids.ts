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
      },
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
    characters: []
  }, {
    groupName: 'Witnesses',
    characters: []
  },
  {
    groupName: 'Gallery',
    characters: []
  },

];
