using System;
using System.Collections.Generic;
using System.Text;

namespace Project_P34.DataAccess.Entity.Models
{
    public class PizzaViewModel
    {
        public string Id { get; set; }
     
        public string Name { get; set; }
        
        public decimal Price { get; set; }
    
        public string Description { get; set; }

       
        public string Image { get; set; }

        public virtual ICollection<Ingredient> Ingredients { get; set; }
    }
}
