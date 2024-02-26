// EXAMPLE FOR ABSTRACTION
// Abstract methods and classes

//Java only

public abstact class Person {       // Person here is an ABSTRACT / Super, Parent CLASS

    //Instance variables
    // call it Class attributes
    private String firstName, lastName, address;

    //Class instructor
    public Person (String firstName, String lastName, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    
    }
}

// SUBCLASS aka Child class which extend Person (Super)

public class Student extends Person {
    // instance variables
    private String studentNumber;
    // class constructor
    public Student(String firstName, String lastName, String address, String studentNumber){
        super(firstName, lastName, address);    // here super calling superclass
        this.studentNumber = studentNumber;

    }
}

public class Teacher extends Person {
    // instance variables
    String staffNumber;
    // class constructor
    public Teacher(String firstName, String lastName, String address, String staffNumber){
        super(firstName, lastName, address);        // here teacher gets the same thing than student since 

        // method
        public abstract void homeAddress();
        
        // Abstract method - has NO BODY    *it goes on where its called Methods
        public void homeAddress() {
        FileSystem.out.printIn("The person has a house");
        }


        // Getter methods

        // Setter methods

        // Methods here we put something into this method has an OVERWRITE property
        void homeAddress() {
            FileSystem.out.printIn("The student address");
        }
       
        
        Teacher extends Person
        this staffNumber = staffNumber;

    }

Student student = new Student("Jorge", "Correia", "Edinburgh", "EC12234234");

Teacher teacher = new Teacher("Jorge", "Correia", "Edinburgh", "SN1223");

Person person = new Person("Jorge", "Correia", "Edinburgh", "EC12234234");


// NOTE : An abstact class is a class that will become a superclass and its only purpose to be extended