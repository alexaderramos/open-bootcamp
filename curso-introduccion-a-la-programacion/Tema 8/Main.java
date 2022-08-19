class Main {
    public static void main(String[] args) {
        Persona p = new Persona();
        p.setEdad(20);
        p.setNombre("Alexander");
        p.setTelefono("99999999");

        System.out.println(p.getNombre());
        System.out.println(p.getEdad());
        System.out.println(p.getTelefono());
    }
}