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

        [HttpPost("addpizza")]
        public ResultDto AddPizza([FromBody]PizzaCreateViewModel model)
        {
            _context.pizzas.Add(new Pizza()
            {
                Id = Guid.NewGuid().ToString(),
                Description = model.Description,
                Image = model.Image,
                Name = model.Name,
                Price = model.Price
            });
            _context.SaveChanges();
            return new ResultDto() { Message = "Added",Status=200};
        }
        [HttpGet("delete/{id}")]
        public ResultDto DeletePizza([FromRoute]string id)
        {
            var pizza = _context.pizzas.FirstOrDefault(x => x.Id == id);
            if(pizza != null)
            {
                _context.pizzas.Remove(pizza);
                _context.SaveChanges();
                return new ResultDto() { Message = "Deleted successfully", Status = 200 };
            }
            return new ResultDto() { Message = "Not found", Status = 404 };

        }
        [HttpPost("edit")]
        public ResultDto EditPizza([FromBody] PizzaViewModel model)
        {
            var _pizza = _context.pizzas.FirstOrDefault(x => x.Id == model.Id);
            if(_pizza != null)
            {
                _pizza.Image = model.Image;
                _pizza.Name = model.Name;
                _pizza.Price = model.Price;
                _pizza.Description = model.Description;
                _context.SaveChanges();

                return new ResultDto() { Message = "Edited successfully", Status = 200 };
            }
            return new ResultDto() { Message = "Not found", Status = 404 };

        }

    }
}