using Microsoft.AspNetCore.Mvc;
using Phone_Book_Application.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Phone_Book_Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneBookContactController : ControllerBase
    {
        PBADataAccess dal;

        public PhoneBookContactController(PBADataAccess dal) {
            this.dal = dal;
        }

        //Query 1
        // POST api/<SalesOrderClientController>
        [HttpPost]
        [Route("AddContact")]
        public void AddContact([FromBody] Contact c)
        {
            dal.AddContact(c);
        }

        //Query 2
        // DELETE api/<SalesOrderClientController>/5
        [HttpDelete()]
        [Route("DeleteContact/{id}")]
        public void DeleteContact(int id)
        {
            dal.DeleteContact(id);
        }

        //Query 3
        // PUT api/<SalesOrderClientController>/5
        [HttpPut()]
        [Route("UpdateContact/{id}")]
        public void PutCustomer( int id, [FromBody] Contact c)
        {
            dal.UpdateContact(id,c);
        }

        //Query 4
        // GET api/<SalesOrderClientController>/5
        [HttpGet()]
        [Route("DisplayContacts")]
        public List<Contact> DisplayContacts()
        {
            return dal.FetchContacts();
        }

        [HttpGet()]
        [Route("DisplayContactById/{id}")]
        public Contact DisplayContactsById(int id)
        {
            return dal.GetContactById(id);
        }

    }
}

    