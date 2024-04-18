export interface Skill {
    id: number;
    title: string;
}

const SkillsMock: Skill[] = [];

for (let i = 0; i < 10; i++) {
    const mockSkill = {
        id: i,
        title: `Mock title ${i}`
    }
    SkillsMock.push(mockSkill)
}

export default SkillsMock;
