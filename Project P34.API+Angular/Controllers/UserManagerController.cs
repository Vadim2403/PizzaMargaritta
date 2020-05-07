using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/UserManager")]
    [ApiController]
    public class UserManagerController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly UserManager<User> _userManager;

        public UserManagerController(EFContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpGet]
        public IEnumerable<UserItemDTO> getUsers()
        
        {
            List<UserItemDTO> data = new List<UserItemDTO>();
            var dataFromDb = _context.Users.Where(x => x.Email != "admin@gmail.com").ToList();
            foreach(var item in dataFromDb)
            {
                UserItemDTO user = new UserItemDTO();

                var moreInfo = _context.userMoreInfos.FirstOrDefault(t => t.Id == item.Id);

                user.Email = item.PhoneNumber;
                user.Id = item.Id;
                user.Phone = item.PhoneNumber;
                if (item.UserMoreInfo != null)
                {
                    user.fullName = moreInfo.FullName;
                    user.Age = moreInfo.Age;
                    user.Address = moreInfo.Address;
                }
                data.Add(user);
            }
            return data;
        }

        [HttpPost("RemoveUser/{id}")]
        public ResultDto RemoveUser([FromRoute]string id)
        {
            try
            {
                var user = _context.Users.FirstOrDefault(x => x.Id == id);
                var userInfo = _context.userMoreInfos.FirstOrDefault(x => x.Id == id);
                _context.Users.Remove(user);
                if (user.UserMoreInfo != null)
                {
                    _context.userMoreInfos.Remove(userInfo);
                }
                _context.SaveChanges();
                return new ResultDto
                {
                    Status = 200,
                    Message = "OK"
                };
                
            }
            catch (Exception e)
            {
                List<string> temp = new List<string>();
                temp.Add(e.Message);
                return new ResultErrorDto
                {                   
                    Status = 500,
                    Message = "Error",
                    Errors = temp
                };
            }
        }

    }
}