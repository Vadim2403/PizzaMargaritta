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
    [Route("api/pizzas")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly IConfiguration _configuration;
        private readonly IJWTTokenService _jwtTokenService;

        public PizzaController(EFContext context,
            IConfiguration configuration,
            IJWTTokenService jWtTokenService)
        {
            
            _context = context;
            _configuration = configuration;
            _jwtTokenService = jWtTokenService;

        }

        [HttpGet]

        public IEnumerable<PizzaViewModel> GetPizzas()
        {
            var result = _context.pizzas.Select(x => new PizzaViewModel()
            {
                Id = x.Id,
                Description = x.Description,
                Image = x.Image,
                Ingredients = x.Ingredients,
                Name = x.Name,
                Price = x.Price
            });
            return result;
        }

        [HttpPost]
        public ResultDto AddPizza([FromBody]PizzaViewModel model)
        {
            _context.pizzas.Add(new Pizza()
            {
                Id = Guid.NewGuid().ToString(),
                Description = model.Description,
                Image = model.Image,
                Name = model.Name,
                Price = model.Price
            });
            return new ResultDto() { Message = "Added",Status=200};
        }

    }
}