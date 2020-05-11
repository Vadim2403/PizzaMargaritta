using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblWhislistPizzas")]
    public class WhishlistPizzas
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Pizza_Id { get; set; }
        [Required]
        public string User_Id { get; set; }

    }
}
