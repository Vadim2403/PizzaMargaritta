using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.Domain.Interfaces;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/whishlist")]
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
        [HttpGet("{cuurent_user_id}")]
        public IEnumerable<Pizza> getWhishlist([FromRoute]string cuurent_user_id)
        {
            List<Pizza> result = new List<Pizza>();
            var wishlist = _context.whishlistPizzas.Where(x => x.User_Id == cuurent_user_id).ToList();
            var pizzas = _context.pizzas.ToList();
            var customs = _context.customPizzas.ToList();
            for(int i = 0; i < wishlist.Count; i++)
            {
              for(int j = 0; j < pizzas.Count; j++)
                {
                    if(pizzas[j].Id == wishlist[i].Pizza_Id)
                    {
                        result.Add(pizzas[j]);
                    }
                }
              for(int k = 0; k < customs.Count; k++)
                {

                    if (customs[k].Id == wishlist[i].Pizza_Id)
                    {

                        result.Add(new Pizza
                        {
                            Description = customs[k].Description,
                            Id = customs[k].Id,
                            Image = customs[k].Image,
                            Name = customs[k].Name,
                            Price = customs[k].Price
                        });
                    }
                }
            }
            return result;
        }
        [HttpPost("addtoWhishList")]
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