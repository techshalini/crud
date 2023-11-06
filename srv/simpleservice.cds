using {shalu} from '../db/schema';
 service mysrv{
    @readonly
    entity readbusinesspartner as projection on shalu.businesspartner;
    @insertonly
    entity insertbusinesspartner as  projection on shalu.businesspartner;
    @updateonly
    entity updatebusinesspartner as projection on shalu.businesspartner;
    @deleteonly
    entity deletebusinesspartner as projection on shalu.businesspartner;
 }