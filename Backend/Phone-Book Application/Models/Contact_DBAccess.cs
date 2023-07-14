using Phone_Book_Application.Models;
using Phone_Book_Application;
using System.Security.Cryptography;

namespace Phone_Book_Application.Models
{
    public interface PBADataAccess
    {
        void AddContact(Contact c);
        List<Contact> FetchContacts();
        void DeleteContact(int num);
        void UpdateContact(int id,Contact c);
        Contact GetContactById(int num);

    }

    public class Contact_DBAccess : PBADataAccess
    {
        ContactDBContext dbCtx;

        public Contact_DBAccess(ContactDBContext dbCtx)
        {
            this.dbCtx = dbCtx;
        }

        //Query 1
        public void AddContact(Contact c)
        {
            dbCtx.Contact.Add(c);
            dbCtx.SaveChanges();
        }

        //Query 2
        public List<Contact> FetchContacts()
        {
            var records = dbCtx.Contact.OrderByDescending(o => o.id).ToList();
            return records;
        }

        //Query 3
        public void DeleteContact(int num)
        {
            var record = dbCtx.Contact.Where(x => x.id == num).First();
            dbCtx.Contact.Remove(record);
            dbCtx.SaveChanges();
        }

        //Query 4
        public void UpdateContact(int id, Contact c)
        {
            var record = dbCtx.Contact.Find(id);
            Console.WriteLine(record);
            if (record != null)
            {
                record.firstname = c.firstname;
                record.lastname = c.lastname;
                record.email=c.email; 
                record.gender = c.gender;
                record.dob = c.dob;
                record.phone=c.phone;
                record.city = c.city;
                record.state=c.state;
                record.picture = c.picture;
            }
            dbCtx.SaveChanges();
        }

        //Query 5
        public Contact GetContactById(int num)
        {
            var record = dbCtx.Contact.FirstOrDefault(x => x.id == num);
            return record;
        }

    }
}