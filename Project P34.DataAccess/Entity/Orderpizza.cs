using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    [Table("tblOrder")]
    class Orderpizza
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string User_Id { get; set; }
        [Required]
        public string Pizza_Id { get; set; }
        [Required]
        public int Count { get; set; }
        [Required]
        public string Size { get; set; }
    }
}
