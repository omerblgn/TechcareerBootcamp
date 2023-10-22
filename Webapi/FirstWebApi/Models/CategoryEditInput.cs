namespace FirstWebApi.Models
{
    public class CategoryEditInput
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }
}