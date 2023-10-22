using FirstWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstWebApi.Data;
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Shipper> Shippers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // fluentapi -> mapping
        modelBuilder.Entity<Category>().ToTable("Categories");  // Aksi belirtilmediği sürece DbSer ismi geçerli olacaktır. Categories
        modelBuilder.Entity<Category>()
            .Property(x => x.Name)
            .HasMaxLength(150)
            .IsRequired();  // default değeri true

        modelBuilder.Entity<Category>()
            .Property(x => x.Description)
            .HasMaxLength(500)
            .IsRequired(false);


        modelBuilder.Entity<Shipper>().ToTable("Shippers");
        modelBuilder.Entity<Shipper>()
            .Property(x => x.CompanyName)
            .HasMaxLength(150)
            .IsRequired();

        modelBuilder.Entity<Shipper>()
            .Property(x => x.Phone)
            .HasMaxLength(24)
            .IsRequired(false);

        base.OnModelCreating(modelBuilder);
    }
}