package com.example.studentregistrationform.model.dto;

import com.example.studentregistrationform.model.entity.Address;

public  record  AddressDto(

         String name,

         String region,

         String capital,

         String township,

         String street
) {

   public static AddressDto from(Address entity){

       return new AddressDto(entity.getName(), entity.getRegion(), entity.getCapital(), entity.getTownship(), entity.getStreet());
   }

}
