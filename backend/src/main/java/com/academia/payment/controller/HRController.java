package com.academia.payment.controller;

import com.academia.payment.bean.Comp;
import com.academia.payment.bean.HR;
import com.academia.payment.dao.HRDAO;
import com.academia.payment.dao.impl.HRDAOImpl;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("HR")
public class HRController {

    HRDAO hrdao = new HRDAOImpl();
    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response add_HR(HR hr){
        System.out.printf(String.valueOf(hr));
        if(hrdao.addHR(hr)){
            return Response.status(200).entity("Success").build();
        }

        return Response.status(400).entity("Failure while adding department").build();
    }

    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll_HR(){
        List<HR> hrs = hrdao.getAllHR();
        System.out.printf("Hello world");
        return Response.status(200).entity(hrs).build();
    }

    @POST
    @Path("/update/{p_id}")
    public Response update_project(@PathParam("p_id") Long pId, HR hr){
        if(hrdao.updateHR(pId, hr)){
            return Response.status(200).entity("Success").build();
        }
        return Response.status(404).entity("Failure while updating project name").build();
    }

    @DELETE
    @Path("/del/{p_id}")
    @Produces(MediaType.TEXT_PLAIN)
    public Response deleteHR(@PathParam("p_id") Long p_id) {
        Boolean dele = hrdao.delHR(p_id);
        if (dele)
            return Response.status(200).entity("Success").build();
        else
            return Response.status(400).build();
    }

}
