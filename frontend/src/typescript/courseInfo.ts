export type Course = {
    code: string;
    name: string;
    description: string;
    //cover_img:
    educationLevel: string;
    year: number;
    semester: "Autumn" | "Spring";
    faculty: string;
    department: string;
    studies: string[];
};

export const CourseInfo: Course[] = [

    {
        code: "DAPE1300",
        name: "Discrete Mathematics",
        description: "skriv noe mer",
        educationLevel: "Bachleor",
        year: 1,
        semester: "Autumn",
        faculty: "Technology, Art and Design (TKD)",
        department: "Department for Computer Science (IT)",
        studies: [
        "Software Engineering",
        "Information Technology",
        "Mathematical Modelling and Data Science"]
    },

    {
        code: "DATA1100",
        name: "Technology and Society for Programmers",
        description: "skriv noe mer",
        educationLevel: "Bachleor",
        year: 1,
        semester: "Autumn",
        faculty: "Technology, Art and Design (TKD)",
        department: "Department for Computer Science (IT)",
        studies: [
        "Mathematical Modelling and Data Science",
        "Applied Data Science",
        "Software Engineering",
        "Information Technology"]
    },

    {
        code: "DAPE1400",
        name: "Programming",
        description: "skriv noe mer",
        educationLevel: "Bachleor",
        year: 1,
        semester: "Autumn",
        faculty: "Technology, Art and Design (TKD)",
        department: "Department for Computer Science (IT)",
        studies: [
        "Mathematical Modelling and Data Science",
        "Applied Data Science",
        "Software Engineering",
        "Information Technology"]
    },

    {
        code: "DATA1200",
        name: "Inclusive Web Design",
        description: "skriv noe mer",
        educationLevel: "Bachleor",
        year: 1,
        semester: "Autumn",
        faculty: "Technology, Art and Design (TKD)",
        department: "Department for Computer Science (IT)",
        studies: [
        "Software Engineering",
        "Information Technology",
        "Applied Data Science"]
    },
    {

    code: "MAMO1100",
    name: "Introduction to modeling and computing",
    description: "skriv noe mer",
    educationLevel: "Bachleor",
    year: 1,
    semester: "Autumn",
    faculty: "Technology, Art and Design (TKD)",
    department: "Department for Computer Science (IT)",
    studies: ["Mathematical Modelling and Data Science"]
    },
    
    {
    code: "ADTS1600",
    name: "Interaction Design and Prototyping",
    description: "skriv noe mer",
    educationLevel: "Bachleor",
    year: 1,
    semester: "Autumn",
    faculty: "Technology, Art and Design (TKD)",
    department: "Department for Computer Science (IT)",
    studies: ["Applied Data Science"]
}
]