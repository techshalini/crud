namespace shalu.common;

using{cuid,temporal,managed} from '@sap/cds/common';

type Gender:String(1) enum{
    Male='M';
    Female='f';
    Others='O'

}