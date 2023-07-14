using Phone_Book_Application.Models;

namespace Phone_Book_Application
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            string consStr = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=PhoneBookDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False";
            builder.Services.AddSqlServer<ContactDBContext>(consStr);
            // Add services to the container.
            builder.Services.AddScoped<PBADataAccess, Contact_DBAccess>();
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("clients-allowed", options =>
                {
                    options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();
            app.MapControllers();
            app.UseCors("clients-allowed");
            app.Run();
        }
    }
}



