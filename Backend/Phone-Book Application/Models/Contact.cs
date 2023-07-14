using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Phone_Book_Application.Models
{
    public class Contact
    {
        [Key]
        [Column("id")]
        public int id { get; set; }
        [Column("firstname")]
        public string firstname { get; set; }
        [Column("lastname")]
        public string lastname { get; set; }
        [Column("email")]
        public string email { get; set; }
        [Column("gender")]
        public string gender { get; set; }
        [Column("dob")]
        public string dob { get; set; }
        [Column("phone")]
        public string phone { get; set; }
        [Column("city")]
        public string city { get; set; }
        [Column("state")]
        public string state { get; set; }
        [Column("country")]
        public string country { get; set; }
        [Column("picture")]
        public string picture { get; set; }
    }
}

