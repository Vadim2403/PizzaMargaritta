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
        [HttpGet]
        public IEnumerable<Pizza> getCstoms()
        {
            List<CustomPizza> result = _context.customPizzas.ToList();
            var result2 = new List<Pizza>();
            for(int i = 0; i < result.Count; i++)
            {
                result2.Add(new Pizza
                {
                    Id = (result[i] as CustomPizza).Id,
                    Description = (result[i] as CustomPizza).Description,
                    Image = (result[i] as CustomPizza).Image,
                    Name = (result[i] as CustomPizza).Name,
                    Price = (result[i] as CustomPizza).Price,
                });
            }
            return result2;
        }
        [HttpPost("addtoCustoms")]
        public ResultDto AddToCustoms([FromBody]CustomPizza model)
        {
            _context.customPizzas.Add(new CustomPizza()
            {
                Id = model.Id,
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