import { Profile } from "./../models/profile";

export const mockprofiles: Profile[] = [
  {
    email: 'maitri@gmail.com', name: 'Maitri', empId: '123456', mobile: '9867986712',
    skills: [
      { skillId: 1, name: 'HTML-CSS-JAVASCRIPT', isTechnical: true, proficiency: 14 },
      { skillId: 3, name: 'REACT', isTechnical: true, proficiency: 16 },
      { skillId: 4, name: 'Asp.Net Core', isTechnical: true, proficiency: 13 },     
      { skillId: 7, name: 'GIT', isTechnical: true, proficiency: 12 },
      { skillId: 8, name: 'DOCKER', isTechnical: true, proficiency: 15 },
      { skillId: 10, name: 'Azure', isTechnical: true, proficiency: 13 },
      { skillId: 11, name: 'SPOKEN', isTechnical: false, proficiency: 18 },
      { skillId: 13, name: 'APTITUDE', isTechnical: false, proficiency: 16 }
    ]
  },
  {
    email: 'rohit@gmail.com', name: 'Rohit', empId: '234567', mobile: '9123412349',
    skills: [
      { skillId: 1, name: 'HTML-CSS-JAVASCRIPT', isTechnical: true, proficiency: 16 },
      { skillId: 2, name: 'ANGULAR', isTechnical: true, proficiency: 13 },
      { skillId: 4, name: 'Asp.Net Core', isTechnical: true, proficiency: 17 }, 
      { skillId: 5, name: 'RESTFUL', isTechnical: true, proficiency: 12 }, 
      { skillId: 6, name: 'Entity Framework', isTechnical: true, proficiency: 11 },
      { skillId: 9, name: 'JENKINS', isTechnical: true, proficiency: 15 }, 
      { skillId: 10, name: 'Azure', isTechnical: true, proficiency: 16  },
      { skillId: 12, name: 'COMMUNICATION', isTechnical: false, proficiency: 14 }]
  }
];
