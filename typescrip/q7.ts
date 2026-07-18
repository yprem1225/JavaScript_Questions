abstract class Institute{
    abstract getInstitutionType():String
}

interface Management{
    addStudent():void
    removeStudent():void
}

class School extends Institute implements Management{
    getInstitutionType(): String {
        return "School"
    }
    addStudent(): void {
        
    }

    removeStudent(): void {
        
    }
}