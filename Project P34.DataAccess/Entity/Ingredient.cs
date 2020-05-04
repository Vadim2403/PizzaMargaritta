using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.NetworkInformation;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblIngredients")]
    public class Ingredient
    {
        [Key]
        public string ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public decimal Price { get; set; }

        [ForeignKey("pizza")]
        public string  pizza_ID { get; set; }

        [Required]
        public string Image { get; set; }

        public Pizza pizza { get; set; }

    }
}
