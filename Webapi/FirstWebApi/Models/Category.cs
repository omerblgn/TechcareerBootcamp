using System.ComponentModel.DataAnnotations;

namespace FirstWebApi.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }
}