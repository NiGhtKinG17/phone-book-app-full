using Phone_Book_Application.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
namespace Phone_Book_Application
{
    public class ContactDBContext : DbContext
    {
        public ContactDBContext(DbContextOptions<ContactDBContext> dbCtx) : base(dbCtx)
        {

        }

        public DbSet<Contact> Contact { get; set;}
    }
}



