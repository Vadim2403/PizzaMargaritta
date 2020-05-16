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
    [Route("api/ingredients")]
    [ApiController]
    public class IngController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly IConfiguration _configuration;
        private readonly IJWTTokenService _jwtTokenService;
        public IngController(EFContext context,
            IConfiguration configuration,
            IJWTTokenService jWtTokenService)
        {
            _context = context;
            _configuration = configuration;
            _jwtTokenService = jWtTokenService;
        }

        [HttpGet]

        public IEnumerable<IngredientViewModel> GetIngredients()
        {
            var result = _context.Ingredients.Select(x => new IngredientViewModel()
            {
                ID = x.ID,
                Image = x.Image,
                Name = x.Name,
                Price = x.Price
            });
            return result;
        }

        [HttpPost("create")]
        public ResultDto CreateIngredient([FromBody] IngredientViewModel model)
        {
            _context.Ingredients.Add(new Ingredient()
            {
                ID = Guid.NewGuid().ToString(),
                Image = model.Image,
                Name = model.Name,
                Price = model.Price
            });
            _context.SaveChanges();
            return new ResultDto(){Status=200,Message="Added successfully" };

        } 
    }
}