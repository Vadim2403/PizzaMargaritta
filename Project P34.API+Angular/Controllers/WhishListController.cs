using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.Domain.Interfaces;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/wishlist")]
    [ApiController]
    public class WhishListController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly IConfiguration _configuration;
        private readonly IJWTTokenService _jwtTokenService;

        public WhishListController(EFContext context,
            IConfiguration configuration,
            IJWTTokenService jWtTokenService)
        {

            _context = context;
            _configuration = configuration;
            _jwtTokenService = jWtTokenService;

        }
        [HttpPost("addpizza")]
        public ResultDto AddToWhishList([FromBody]WhishlistPizzas model)
        {
            _context.whishlistPizzas.Add(new WhishlistPizzas()
            {
                Id = model.Id,
                Pizza_Id = model.Pizza_Id,
                User_Id = model.User_Id,
            }) ;
            _context.SaveChanges();
            return new ResultDto() { Message = "Whishlist Updated", Status = 200 };
        }
    }
}