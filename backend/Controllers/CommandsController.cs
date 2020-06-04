using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using CmdApi.Models;

//radi PUT-a
using Microsoft.EntityFrameworkCore;



namespace CmdApi.Controllers
{
    //ControllerBase je bez View podrške
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]

    public class CommandsController : ControllerBase
    {

        private readonly CommandContext _context;

        public CommandsController(CommandContext context) => _context = context;
        //GET:     api/commands 
        [HttpGet]
        public ActionResult<IEnumerable<Command>> GetCommands()
        {
            return _context.CommandItmes;
        }
        //GET:     api/commands/n
        [HttpGet("{id}")]
        public ActionResult<Command> GetCommandItem(int id)
        {
            var commandItem = _context.CommandItmes.Find(id);
            if (commandItem == null)
            {
                return NotFound();
            }
            return commandItem;
        }
        [HttpPost]
        public ActionResult<Command> PostCommandItem(Command command)
        {
            _context.CommandItmes.Add(command);
            _context.SaveChanges();

            // return CreatedAtAction("GetCommandItem", new Command { Id = command.Id }, command);
            return CreatedAtAction("GetCommandItem", new Command { Id = command.Id }, command);
        }


        //  PUT:     api/commands/n
        [HttpPut("{id}")]
        public ActionResult<Command> PutCommandItem(int id, Command command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }

            _context.Entry(command).State = EntityState.Modified;
            // za spremit promjene u bazi
            _context.SaveChanges();

            return NoContent();

        }
        //  DELETE:    api/commands/n
        [HttpDelete("{id}")]
        public ActionResult<Command> DeleteCommandItem(int id)
        {
            var commandItem = _context.CommandItmes.Find(id);
            if (commandItem == null)
            {
                return NotFound();
            }
            _context.CommandItmes.Remove(commandItem);
            _context.SaveChanges();
            return commandItem;

        }

        // [HttpGet]
        // public ActionResult<IEnumerable<string>> GetString()
        // {
        //     return new string[] { "this", "is", "hard", "coded" };
        // }
    }
}
