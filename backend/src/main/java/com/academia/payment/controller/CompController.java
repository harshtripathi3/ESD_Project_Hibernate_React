package com.academia.payment.controller;


import com.academia.payment.bean.Comp;
import com.academia.payment.bean.HR;
import com.academia.payment.dao.CompDAO;
import com.academia.payment.dao.impl.CompDAOImpl;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("comp")
public class CompController {

    CompDAO compDAO = new CompDAOImpl();

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response add_Comp(Comp comp){
        System.out.printf(String.valueOf(comp));
        if(compDAO.addComp(comp)){
            return Response.status(200).entity("Success").build();
        }

        return Response.status(400).entity("Failure while adding department").build();
    }

    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get_all_comp(){
        List<Comp> comps = compDAO.getComList();
        System.out.printf("Hello world");
        return Response.status(200).entity(comps).build();
    }
    @GET
    @Path("getHRid/{comp_id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get_HR_id(@PathParam("comp_id") Long comp_id){
        List<HR> hrss=compDAO.getcompHR(comp_id);
        if(hrss==null)
            return Response.status(401).build();
        else
            return Response.status(200).entity(hrss).build();
    }

    @DELETE
    @Path("/del/{comp_id}")
    @Produces(MediaType.TEXT_PLAIN)
    public Response deleteHR(@PathParam("comp_id") Long comp_id) {
        Boolean d= compDAO.delComp(comp_id);
        if (d)
            return Response.status(200).entity("Success").build();
        else
            return Response.status(400).build();
    }

}
