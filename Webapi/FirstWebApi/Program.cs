using FirstWebApi.Data;
using FirstWebApi.Models;
using FirstWebApi.Services;
using FirstWebApi.Validations;
using FluentValidation;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var allowedOrigins = "_bootcampOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowedOrigins, policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500");
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("default")));

builder.Services.AddScoped<IValidator<CategoryCreateInput>, CategoryCreateInputValidator>();
// builder.Services.AddTransient<ICategoryService, CategoryService>();
builder.Services.AddTransient<IShipperService, ShipperService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
// app.UseAuthorization();
app.UseCors(allowedOrigins);
app.MapControllers();
app.Run();