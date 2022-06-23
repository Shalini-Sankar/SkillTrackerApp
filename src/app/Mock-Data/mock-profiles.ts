import { Profile } from "./../models/profile";


export const mockprofiles: Profile[] = [
  {
    email: 'maitri@gmail.com', name: 'Maitri', empId: '123456', mobile: '9867986712',
    skills: [
      { skillId: 1, name: '.NET', isTechnical: true, proficiency: 4 },
      { skillId: 2, name: 'ANGULAR', isTechnical: true, proficiency: 3 },
      { skillId: 3, name: 'AZURE', isTechnical: true, proficiency: 3 },
      { skillId: 4, name: 'GIT', isTechnical: true, proficiency: 3 },
      { skillId: 5, name: 'DOCKER', isTechnical: true, proficiency: 3 },
      { skillId: 6, name: 'COMMUNICATION SKILL', isTechnical: false, proficiency: 3 }
    ]
  },
  {
    email: 'rohit@gmail.com', name: 'Rohit', empId: '234567', mobile: '9123412349',
    skills: [
      { skillId: 1, name: '.NET', isTechnical: true, proficiency: 4 },
      { skillId: 2, name: 'ANGULAR', isTechnical: true, proficiency: 3 },
      { skillId: 3, name: 'AZURE', isTechnical: true, proficiency: 2 },
      { skillId: 5, name: 'DOCKER', isTechnical: true, proficiency: 2 },   
      { skillId: 6, name: 'COMMUNICATION SKILL', isTechnical: false, proficiency: 4 }]
  }
];
