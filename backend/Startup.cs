using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
//added
using Microsoft.EntityFrameworkCore;
//ovo je tribalo za use sql server
using Microsoft.Extensions.Configuration;
using CmdApi.Models;

namespace CmdApi
{
    public class Startup
    {

        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration) => Configuration = configuration;

        // readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


        //ILI

        // public Startup(IConfiguration configuration)
        // {
        //     Configuration = configuration;
        // }


        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CommandContext>(opt => opt.UseSqlServer(Configuration["Data:CommandAPIConnection:ConnectionString"]));

            services.AddCors(options =>
          {
              options.AddPolicy("CorsPolicy",
                  builder => builder.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials()
                  );
          });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("CorsPolicy");
            app.UseMvc();
        }
    }
}
