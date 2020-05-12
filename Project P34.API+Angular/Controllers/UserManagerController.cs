using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;
using System.Security.Claims;

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

        [HttpGet("getusersid")]
        public string GetcurrId()
        {
            ClaimsPrincipal currentUser = this.User;
            var currentUserID = currentUser.FindFirst(ClaimTypes.NameIdentifier).Value;
            return currentUserID;
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

        [HttpGet("{id}")]
        public UserItemDTO GetUser([FromRoute]string id)
        {
            var user = _context.Users.FirstOrDefault(t => t.Id == id);
            var userMoreInfo = _context.userMoreInfos.FirstOrDefault(t => t.Id == id);


            UserItemDTO model = new UserItemDTO();
            model.Id = user.Id;
            model.Email = user.Email;
            model.Phone = user.PhoneNumber;

            if (userMoreInfo != null)
            {
                model.Age = userMoreInfo.Age;
                model.fullName = userMoreInfo.FullName;
                model.Address = userMoreInfo.Address;
            }

            return model;
        }


        [HttpPost("editUser/{id}")]
        public ResultDto EditUser([FromRoute]string id, [FromBody]UserItemDTO model)
        {
            var user = _context.Users.FirstOrDefault(t => t.Id == id);
            var userMoreInfo = _context.userMoreInfos.FirstOrDefault(t => t.Id == id);

            user.PhoneNumber = model.Phone;
            userMoreInfo.FullName = model.fullName;
            user.Email = model.Email;

            _context.SaveChanges();

            return new ResultDto
            {
                Status = 200,
                Message = "OK"
            };

        }


    }
}