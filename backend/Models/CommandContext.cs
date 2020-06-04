using Microsoft.EntityFrameworkCore;

namespace CmdApi.Models
{
    public class CommandContext : DbContext
    {
        //dodan public na constructor, po deafultu je private
        public CommandContext(DbContextOptions<CommandContext> options) : base(options)
        {

        }

        public DbSet<Command> CommandItmes { get; set; }

    }
}