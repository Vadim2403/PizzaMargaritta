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
using Project_P34.DataAccess.Entity.Models;
using Project_P34.Domain.Interfaces;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/custom")]
    [ApiController]
    public class CustomsController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly IConfiguration _configuration;
        private readonly IJWTTokenService _jwtTokenService;

        public CustomsController(EFContext context,
            IConfiguration configuration,
            IJWTTokenService jWtTokenService)
        {

            _context = context;
            _configuration = configuration;
            _jwtTokenService = jWtTokenService;

        }
        [HttpPost("addtoCustoms")]
        public ResultDto AddToCustoms([FromBody]CustomPizza model)
        {
            _context.customPizzas.Add(new CustomPizza()
            {
                Id = Guid.NewGuid().ToString(),
                Description = model.Description,
                Image = model.Image,
                Name = model.Name,
                Price = model.Price
            });
            _context.SaveChanges();
            return new ResultDto() { Message = "Whishlist Updated", Status = 200 };
        }
    }
}