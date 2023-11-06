using{shalu} from '../db/schema';

service myservice{

    entity businesspartner as projection on shalu.businesspartner ;

    entity address as projection on shalu.address;
    entity employee as projection on shalu.employee;
}
