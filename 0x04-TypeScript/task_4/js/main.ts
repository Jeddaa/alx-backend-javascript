namespace Subjects {
    export const cpp = Cpp;
    export const java = Java;
    export const react = React;
    export const cTeacher: Teacher =
    {
        firstName: 'John',
        lastName: 'Doe',
        experienceTeachingC: 10 
    }
    

    const c = new cpp();
    c.teacher = cTeacher;
    console.log(c.getRequirements);
    console.log(c.getAvailableTeacher);

    const j = new java();
    c.teacher = cTeacher;
    console.log(c.getRequirements);
    console.log(c.getAvailableTeacher);

    const r = new react();
    c.teacher = cTeacher;
    console.log(c.getRequirements);
    console.log(c.getAvailableTeacher);
}
